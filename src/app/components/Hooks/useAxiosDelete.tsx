import { useState } from "react";
import axios from "axios";
const URL: string = `${process.env.NEXT_PUBLIC_BASE_URL}`;
const useAxiosDelete = (
  endpoint?: string,
  options?: {
    errorInterceptor?: {
      action?: any;
      message?: string;
    };
    completeInterceptor?: {
      action?: any;
      message?: string;
    };
  }
) => {
  const [isLoading, setisLoading] = useState(false);
  const Delete = async (token: string, id: number) => {
    try {
      const resp = await axios({
        method: "delete",
        url: `${URL}${endpoint}${id}`,
        headers: { Authorization: `Bearer ${token}` },
      });
      if (options?.completeInterceptor?.action) {
        setisLoading(true);
        options.completeInterceptor.action(resp);
      }
      if (options?.completeInterceptor?.message) {
        console.log(options?.completeInterceptor?.message);
      }
    } catch (err) {
      if (options?.errorInterceptor?.action) {
        setisLoading(true);
        options.errorInterceptor.action();
      }
      if (options?.errorInterceptor?.message) {
        console.log(options?.errorInterceptor?.message);
      }
    }
  };

  return { Delete, isLoading };
};

export default useAxiosDelete;
