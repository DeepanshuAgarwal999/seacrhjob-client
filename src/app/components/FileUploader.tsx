"use client"
import { UploadCloudIcon } from 'lucide-react'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

type FileUploaderProps = {
    files: File[] | undefined,
    onChange: (file: File[]) => void
}
const FileUploader = ({ files, onChange }: FileUploaderProps) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        onChange(acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <div {...getRootProps()} className="file-upload">
            <input {...getInputProps()} />
            {files && files?.length > 0 ? (
                <h1>Resume uploaded successfully - [{files[0].name}]</h1>
            ) : (
                <>
                    <UploadCloudIcon className='mx-auto' />
                    <div className="">
                        <p className=" cursor-pointer">
                            <span className="text-blue-500">Click to upload </span>
                            or drag and drop
                        </p>
                        <p className="text-sm">
                            SVG, PNG, JPG or GIF (max. 800x400px)
                        </p>
                    </div>
                </>
            )}
        </div>
    )

}

export default FileUploader