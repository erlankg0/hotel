export interface Props {
    title?: string;
    description?: string;
    onConfirm: () => void;
    isPending?: boolean;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}