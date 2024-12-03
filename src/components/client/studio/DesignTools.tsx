import React from 'react';
import { Upload, Image, FileText } from 'lucide-react';
import { useDesignStore } from '../../../stores/designStore';
import { useDropzone } from 'react-dropzone';

export default function DesignTools() {
  const { uploadDesign, loading, error } = useDesignStore();

  const onDrop = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      await uploadDesign(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.svg']
    },
    maxSize: 25 * 1024 * 1024, // 25MB
    multiple: false
  });

  return (
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-6 transition-all text-center cursor-pointer ${
          isDragActive ? 'border-green-500 bg-green-500/10' : 'border-green-500/20 hover:border-green-500/50'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="w-10 h-10 text-green-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-white mb-2">
          {isDragActive ? 'Drop your design here' : 'Upload your design'}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          Drag and drop or click to browse
        </p>
        <div className="flex justify-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Image size={14} className="text-green-500" />
            PNG, JPG, SVG
          </span>
          <span className="flex items-center gap-1">
            <FileText size={14} className="text-green-500" />
            Max 25MB
          </span>
        </div>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-500 text-sm">
          {error}
        </div>
      )}

      {loading && (
        <div className="text-center py-4">
          <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
          <p className="text-sm text-green-500">Uploading your design...</p>
        </div>
      )}
    </div>
  );
}