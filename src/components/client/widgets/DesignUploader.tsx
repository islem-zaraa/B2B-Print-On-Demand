import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image, FileText } from 'lucide-react';

export default function DesignUploader() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload logic here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.svg'],
      'application/x-photoshop': ['.psd']
    },
    multiple: true
  });

  return (
    <div
      {...getRootProps()}
      className={`backdrop-blur-xl bg-black/30 border-2 border-dashed ${
        isDragActive ? 'border-green-500' : 'border-green-500/20'
      } rounded-2xl p-12 text-center cursor-pointer hover:border-green-500/50 transition-all`}
    >
      <input {...getInputProps()} />
      <Upload className="w-12 h-12 text-green-500 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">
        {isDragActive ? 'Drop your files here' : 'Upload your designs'}
      </h3>
      <p className="text-gray-400 mb-4">
        Drag and drop your design files or click to browse
      </p>
      <div className="flex justify-center gap-4 text-sm text-gray-400">
        <span className="flex items-center gap-1">
          <Image size={16} className="text-green-500" />
          PNG, JPG, SVG
        </span>
        <span className="flex items-center gap-1">
          <FileText size={16} className="text-green-500" />
          PSD
        </span>
      </div>
    </div>
  );
}