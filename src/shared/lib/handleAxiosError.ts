import axios from 'axios';
import { toast } from 'sonner';

export const handleAxiosError = async (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const data = error.response?.data as { message?: string };

    // Специальное сообщение для 409 или других статусов
    if (status === 409) {
      toast.error(data?.message ?? 'Конфликт: объект уже существует!');
    } else if (status === 401) {
      toast.error(data?.message ?? 'Неавторизованный доступ!');
    } else {
      toast.error(data?.message ?? 'Неизвестная ошибка!');
    }
  } else {
    toast.error('Неизвестная ошибка!');
  }
};