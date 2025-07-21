type SelectedFile = {
    file: File;
    url: string;
  };
  
  export function filterAndPrepareImageFiles(
    files: FileList | File[],
    existingFiles: SelectedFile[] = []
  ): SelectedFile[] {
    const fileArray = Array.isArray(files) ? files : Array.from(files);
  
    const acceptedFiles = fileArray.filter((file) =>
      file.type.startsWith("image/")
    );
  
    const newFiles = acceptedFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
  
    return [...existingFiles, ...newFiles];
  }
  