import toast from "react-hot-toast";
export const timems = 4000;
export const SuccessCreateMessageToast = (title: string) =>
  toast.success(`Registro "${title}" creado exitosamente`, {
    duration: timems,
    style: { background: "#d5eddb", color: "#376f43" },
  });
export const ErrorCreateMessageToast = (title: string) =>
  toast.error(
    `No se pudo borrar el registro "${title}", contacta con soporte o verificar los campos`,
    {
      duration: timems,
      style: { background: "#f7d7db", color: "#84373f" },
    }
  );
export const SuccessEdithMessageToast = (title: string) =>
  toast.success(`Registro "${title}" editado exitosamente`, {
    duration: timems,
    style: { background: "#d5eddb", color: "#376f43" },
  });
export const ErrorEdithMessageToast = (title: string) =>
  toast.error(
    `No se pudo Editar el registro "${title}", contacta con soporte o verificar los campos`,
    {
      duration: timems,
      style: { background: "#f7d7db", color: "#84373f" },
    }
  );
