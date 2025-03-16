import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, AlertCircle } from 'lucide-react';
import { useMockupStore } from '../../stores/mockupStore';

export default function DesignUploader() {
  const { setDesignFile } = useMockupStore();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      // Check image resolution
      const img = new Image();
      img.onload = () => {
        const dpi = calculateDPI(img.width, img.height);
        if (dpi < 300) {
          alert('Warning: Image resolution is below 300 DPI. This may affect print quality.');
        }
        setDesignFile(file);
      };
      img.src = URL.createObjectURL(file);
    }
  }, [setDesignFile]);

  const calculateDPI = (width: number, height: number): number => {
    // Assuming standard print size of 8.5x11 inches
    const dpi = Math.min(width / 8.5, height / 11);
    return dpi;
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.svg']
    },
    maxSize: 10485760, // 10MB
    multiple: false
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
        isDragActive ? 'border-green-500 bg-green-500/10' : 'border-green-500/20 hover:border-green-500/50'
      }`}
    >
      <input {...getInputProps()} />
      <Upload className="w-12 h-12 text-green-500 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">
        {isDragActive ? 'Drop your design here' : 'Upload your design'}
      </h3>
      <p className="text-gray-400 mb-4">PNG, JPG, or SVG (max 10MB)</p>
      <div className="flex items-center justify-center gap-2 text-yellow-500">
        <AlertCircle size={16} />
        <span className="text-sm">Recommended: 300 DPI or higher</span>
      </div>
    </div>
  );
}