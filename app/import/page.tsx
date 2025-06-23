"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import Papa from "papaparse"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function ImportPage() {
  const [csvData, setCsvData] = useState<any[]>([])
  const [columnMapping, setColumnMapping] = useState<{
    [key: string]: string
  }>({})
  const [isImporting, setIsImporting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const [description, setDescription] = useState("")

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0]
        Papa.parse(file, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setCsvData(results.data)
            // Automatically map columns based on common names (e.g., "name" -> "Name")
            if (results.meta.fields) {
              const initialMapping: { [key: string]: string } = {}
              results.meta.fields.forEach((field) => {
                initialMapping[field] = field // Default to same name
              })
              setColumnMapping(initialMapping)
            }
          },
          error: (error) => {
            toast({
              title: "Error parsing CSV",
              description: error.message,
              variant: "destructive",
            })
          },
        })
      }
    },
    [toast],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleColumnMappingChange = (column: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setColumnMapping({ ...columnMapping, [column]: event.target.value })
  }

  const handleImport = async () => {
    setIsImporting(true)
    try {
      const mappedData = csvData.map((item) => {
        const newItem: { [key: string]: any } = {}
        Object.keys(columnMapping).forEach((csvColumn) => {
          newItem[columnMapping[csvColumn]] = item[csvColumn]
        })
        return newItem
      })

      // Send the mapped data to your API endpoint
      const response = await fetch("/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: mappedData, description: description }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      toast({
        title: "Import Successful",
        description: "Your data has been successfully imported.",
      })
      router.push("/") // Redirect to home page or appropriate route
    } catch (error: any) {
      toast({
        title: "Import Failed",
        description: error.message || "An error occurred during import.",
        variant: "destructive",
      })
    } finally {
      setIsImporting(false)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Import Items from CSV</CardTitle>
          <CardDescription>Upload a CSV file to import items. Website pricing applies.</CardDescription>
        </CardHeader>
        <CardContent>
          <div
            {...getRootProps()}
            className="dropzone border-2 border-dashed rounded-md p-6 text-center cursor-pointer"
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>

          {csvData.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Column Mapping</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.keys(columnMapping).map((column) => (
                  <div key={column}>
                    <Label htmlFor={`mapping-${column}`}>{column}</Label>
                    <Input
                      type="text"
                      id={`mapping-${column}`}
                      value={columnMapping[column]}
                      onChange={(event) => handleColumnMappingChange(column, event)}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Enter a description for this import"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <Button className="mt-6" onClick={handleImport} disabled={isImporting}>
                {isImporting ? "Importing..." : "Import"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
