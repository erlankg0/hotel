export type TableInfoProps = {
  infoType: 'list' | 'info' | 'table';
  title?: string;
  info?: InfoType[];
  list?: string[];
};

type InfoType = {
  label: string;
  value: string;
}