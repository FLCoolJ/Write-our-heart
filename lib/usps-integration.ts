// USPS Address Validation Integration
export interface USPSAddress {
  address1?: string
  address2: string
  city: string
  state: string
  zip5: string
  zip4?: string
}

export interface USPSValidationResult {
  valid: boolean
  corrected?: USPSAddress
  error?: string
}

export async function validateUSPSAddress(address: USPSAddress): Promise<USPSValidationResult> {
  try {
    const xmlRequest = `
      <AddressValidateRequest USERID="${process.env.USPS_USER_ID}">
        <Revision>1</Revision>
        <Address ID="0">
          <Address1>${address.address1 || ""}</Address1>
          <Address2>${address.address2}</Address2>
          <City>${address.city}</City>
          <State>${address.state}</State>
          <Zip5>${address.zip5}</Zip5>
          <Zip4>${address.zip4 || ""}</Zip4>
        </Address>
      </AddressValidateRequest>
    `

    const response = await fetch(
      `https://secure.shippingapis.com/ShippingAPI.dll?API=Verify&XML=${encodeURIComponent(xmlRequest)}`,
    )

    const xmlText = await response.text()

    // Simple XML parsing (you might want to use a proper XML parser)
    if (xmlText.includes("<Error>")) {
      const errorMatch = xmlText.match(/<Description>(.*?)<\/Description>/)
      return {
        valid: false,
        error: errorMatch ? errorMatch[1] : "Address validation failed",
      }
    }

    // Extract corrected address
    const address2Match = xmlText.match(/<Address2>(.*?)<\/Address2>/)
    const cityMatch = xmlText.match(/<City>(.*?)<\/City>/)
    const stateMatch = xmlText.match(/<State>(.*?)<\/State>/)
    const zip5Match = xmlText.match(/<Zip5>(.*?)<\/Zip5>/)
    const zip4Match = xmlText.match(/<Zip4>(.*?)<\/Zip4>/)

    return {
      valid: true,
      corrected: {
        address2: address2Match ? address2Match[1] : address.address2,
        city: cityMatch ? cityMatch[1] : address.city,
        state: stateMatch ? stateMatch[1] : address.state,
        zip5: zip5Match ? zip5Match[1] : address.zip5,
        zip4: zip4Match ? zip4Match[1] : address.zip4,
      },
    }
  } catch (error) {
    console.error("USPS validation error:", error)
    return {
      valid: false,
      error: "Address validation service unavailable",
    }
  }
}
