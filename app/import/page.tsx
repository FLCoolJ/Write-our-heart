"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Upload, FileSpreadsheet, AlertCircle, CheckCircle } from "lucide-react"
import * as XLSX from "xlsx"

export default function ImportContacts() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)
  const [importing, setImporting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    setFile(selectedFile)
    setError(null)

    // Read the Excel file
    const reader = new FileReader()
    reader.onload = (evt) => {
      try {
        const bstr = evt.target?.result
        const wb = XLSX.read(bstr, { type: "binary" })
        const wsname = wb.SheetNames[0]
        const ws = wb.Sheets[wsname]
        const data = XLSX.utils.sheet_to_json(ws)

        // Validate the data structure
        if (data.length === 0) {
          setError("The file appears to be empty")
          return
        }

        // Check for required columns
        const requiredColumns = ["name", "relationship"]
        const firstRow = data[0] as any
        const missingColumns = requiredColumns.filter((col) => !(col in firstRow))

        if (missingColumns.length > 0) {
          setError(`Missing required columns: ${missingColumns.join(", ")}`)
          return
        }

        // Show preview (first 5 rows)
        setPreview(data.slice(0, 5))
      } catch (e) {
        setError("Failed to parse the Excel file. Please ensure it's a valid .xlsx file.")
      }
    }
    reader.readAsBinaryString(selectedFile)
  }

  const handleImport = async () => {
    if (!file) return

    setImporting(true)

    try {
      // In a real app, this would send the file to your server
      // For the beta, we'll just simulate processing
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success message
      setSuccess(true)

      // In a real app, redirect to hearts page after import
      setTimeout(() => {
        router.push("/my-hearts")
      }, 2000)
    } catch (e) {
      setError("Failed to import contacts. Please try again.")
    } finally {
      setImporting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-500 p-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center">
              <FileSpreadsheet className="mr-2 h-6 w-6" />
              Import Contacts from Excel
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {!success ? (
              <>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Upload Excel File</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Upload an Excel file with your contacts. The file should have columns for name, relationship, email,
                    phone, etc.
                  </p>
                  <Input type="file" accept=".xlsx,.xls" onChange={handleFileChange} className="max-w-xs mx-auto" />
                  <div className="mt-4 text-xs text-gray-500">
                    <p>Required columns: name, relationship</p>
                    <p>Optional: email, phone, address, birthday, etc.</p>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <p className="text-red-800">{error}</p>
                  </div>
                )}

                {preview.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-medium">Preview (First 5 Contacts)</h3>
                    <div className="border rounded-md overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            {Object.keys(preview[0]).map((key) => (
                              <TableHead key={key}>{key}</TableHead>
                            ))}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {preview.map((row, i) => (
                            <TableRow key={i}>
                              {Object.values(row).map((value: any, j) => (
                                <TableCell key={j}>{value}</TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500">
                        {preview.length} of {preview.length} contacts shown
                      </p>
                      <Button
                        onClick={handleImport}
                        disabled={importing}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black"
                      >
                        {importing ? "Importing..." : "Import Contacts"}
                      </Button>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                      <h4 className="font-medium text-blue-800 mb-2">Data Privacy Notice</h4>
                      <p className="text-sm text-blue-700">
                        Your contact data is securely processed and stored. We do not share this information with third
                        parties. By uploading this file, you confirm you have permission to use this contact
                        information.
                      </p>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-medium text-green-800 mb-2">Import Successful!</h3>
                <p className="text-gray-600 mb-6">Your contacts have been imported successfully.</p>
                <Button
                  onClick={() => router.push("/my-hearts")}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black"
                >
                  View My Hearts
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
