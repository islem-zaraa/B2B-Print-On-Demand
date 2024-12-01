import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, AlertCircle, FileImage, FileCheck } from 'lucide-react';
import { useDesignStore } from '../../../stores/designStore';

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB
const ACCEPTED_TYPES = {
  'image/png': ['.png'],
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/svg+xml': ['.svg']
};

export default function DesignUploader() {
  const { uploadDesign, loading, error } = useDesignStore();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      await uploadDesign(file);
    }
  }, [uploadDesign]);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop,
    accept: ACCEPTED_TYPES,
    maxSize: MAX_FILE_SIZE,
    multiple: false
  });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`relative border-2 border-dashed rounded-xl p-8 transition-all ${
          isDragActive 
            ? 'border-green-500 bg-green-500/10' 
            : 'border-green-500/20 hover:border-green-500/50'
        }`}
      >
        <input {...getInputProps()} />
        
        <div className="text-center">
          <Upload className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">
            {isDragActive ? 'Drop your design here' : 'Upload your design'}
          </h3>
          <p className="text-gray-400 mb-4">
            Drag and drop or click to browse
          </p>
          
          <div className="flex justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <FileImage size={16} className="text-green-500" />
              PNG, JPG, SVG
            </span>
            <span className="flex items-center gap-1">
              <FileCheck size={16} className="text-green-500" />
              Max 25MB
            </span>
          </div>
        </div>

        {loading && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <div className="space-y-2 text-center">
              <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm text-green-500">Uploading...</p>
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-lg">
          <AlertCircle size={20} />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {acceptedFiles[0] && !loading && !error && (
        <div className="flex items-center gap-4 bg-green-500/10 p-4 rounded-lg">
          <img
            src={URL.createObjectURL(acceptedFiles[0])}
            alt="Design preview"
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <p className="text-white font-medium">{acceptedFiles[0].name}</p>
            <p className="text-sm text-gray-400">
              {(acceptedFiles[0].size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        </div>
      )}
    </div>
  );
}