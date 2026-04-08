import type { DropzoneOptions } from 'react-dropzone';

export interface DropzoneProps {
  onFilesSelected: (files: File[]) => void;
  options?: DropzoneOptions;
  className?: string;
  placeholder?: string;
}