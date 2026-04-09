'use client';
import {
  File as FileIcon,
  FileArchive,
  FileCode,
  FileText,
  FileVideoCamera,
  UploadCloud,
  type LucideIcon,
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { cn } from '../../../lib/utils';

import s from './styles.module.scss';

import type { DropzoneProps } from '../model/type';

type PreviewItem = {
  id: string;
  file: File;
  previewUrl?: string;
};

function getFileId(file: File) {
  return `${file.name}-${file.size}-${file.lastModified}`;
}

function createPreviewItem(file: File): PreviewItem {
  return {
    id: getFileId(file),
    file,
    previewUrl: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
  };
}

function revokePreviewItems(items: PreviewItem[]) {
  items.forEach(item => {
    if (item.previewUrl) {
      URL.revokeObjectURL(item.previewUrl);
    }
  });
}

function getFileExtension(name: string) {
  const extension = name.split('.').pop();

  if (!extension || extension === name) {
    return 'ФАЙЛ';
  }

  return extension.toUpperCase();
}

function formatFileSize(size: number) {
  if (size < 1024) {
    return `${size} Б`;
  }

  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(size < 10 * 1024 ? 1 : 0)} КБ`;
  }

  if (size < 1024 * 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(size < 10 * 1024 * 1024 ? 1 : 0)} МБ`;
  }

  return `${(size / (1024 * 1024 * 1024)).toFixed(1)} ГБ`;
}

function getFileIcon(file: File): LucideIcon {
  const type = file.type.toLowerCase();
  const extension = getFileExtension(file.name).toLowerCase();

  if (
    type.includes('pdf') ||
    type.includes('word') ||
    type.includes('document') ||
    type.includes('text') ||
    ['doc', 'docx', 'txt', 'rtf', 'pdf'].includes(extension)
  ) {
    return FileText;
  }

  if (
    type.includes('zip') ||
    type.includes('rar') ||
    type.includes('archive') ||
    type.includes('compressed') ||
    ['zip', 'rar', '7z', 'tar', 'gz'].includes(extension)
  ) {
    return FileArchive;
  }

  if (
    type.includes('json') ||
    type.includes('javascript') ||
    type.includes('typescript') ||
    type.includes('xml') ||
    type.includes('html') ||
    ['js', 'ts', 'tsx', 'jsx', 'json', 'html', 'css', 'scss', 'xml'].includes(extension)
  ) {
    return FileCode;
  }

  if (type.startsWith('video/') || ['mp4', 'mov', 'avi', 'mkv', 'webm'].includes(extension)) {
    return FileVideoCamera;
  }

  return FileIcon;
}

export function Dropzone({
  className,
  onFilesSelected,
  options,
  placeholder = 'Перетащите файлы сюда или нажмите для загрузки',
}: DropzoneProps) {
  const [previewItems, setPreviewItems] = useState<PreviewItem[]>([]);
  const previewItemsRef = useRef<PreviewItem[]>([]);
  const isSingleFileMode = options?.multiple === false || options?.maxFiles === 1;

  useEffect(() => {
    previewItemsRef.current = previewItems;
  }, [previewItems]);

  useEffect(() => {
    return () => {
      revokePreviewItems(previewItemsRef.current);
    };
  }, []);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFilesSelected(acceptedFiles);

        setPreviewItems(previousItems => {
          if (isSingleFileMode) {
            revokePreviewItems(previousItems);
            return acceptedFiles.map(createPreviewItem);
          }

          return [...previousItems, ...acceptedFiles.map(createPreviewItem)];
        });
      }
    },
    [isSingleFileMode, onFilesSelected],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    ...options,
  });
  const hasItems = previewItems.length > 0;
  const rootProps = getRootProps({
    className: cn(
      s.dropzone,
      hasItems && s.filled,
      isDragActive && s.active,
      className,
    ),
  });
  const title = isDragActive ? 'Отпускайте файлы для загрузки' : placeholder;
  const description = isDragActive
    ? 'Файлы появятся в списке сразу после выбора.'
    : hasItems
      ? `Файлов в списке: ${previewItems.length}. Перетащите ещё или нажмите, чтобы добавить.`
      : 'Изображения будут показаны с превью, а документы — аккуратными карточками.';

  return (
    <div {...rootProps}>
      <input {...getInputProps()} />

      <div className={s.header}>
        <div className={s.iconWrap}>
          <UploadCloud className={s.icon} />
        </div>

        <div className={s.copy}>
          <p className={s.title}>{title}</p>
          <p className={s.text}>{description}</p>
        </div>

        {hasItems && <span className={s.counter}>Загружено: {previewItems.length}</span>}
      </div>

      {hasItems && (
        <div className={s.grid}>
          {previewItems.map(item => {
            const Icon = getFileIcon(item.file);

            return (
              <article
                key={item.id}
                className={cn(
                  s.card,
                  item.previewUrl ? s.imageCard : s.fileCard,
                )}
              >
                {item.previewUrl ? (
                  <>
                    <div className={s.previewWrap}>
                      <img
                        alt={item.file.name}
                        className={s.previewImage}
                        src={item.previewUrl}
                      />
                      <span className={s.badge}>{getFileExtension(item.file.name)}</span>
                    </div>

                    <div className={s.cardBody}>
                      <span className={s.fileName} title={item.file.name}>
                        {item.file.name}
                      </span>
                      <span className={s.fileMeta}>{formatFileSize(item.file.size)}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={s.fileIconWrap}>
                      <Icon className={s.fileIcon} />
                    </div>

                    <div className={s.cardBody}>
                      <span className={s.fileName} title={item.file.name}>
                        {item.file.name}
                      </span>

                      <div className={s.fileMetaRow}>
                        <span className={s.badge}>{getFileExtension(item.file.name)}</span>
                        <span className={s.fileMeta}>{formatFileSize(item.file.size)}</span>
                      </div>
                    </div>
                  </>
                )}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
