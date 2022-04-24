import axios from "axios";
import { useState } from "react";
const URL: string = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const useAxiosPost = (
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
  const Post = async (dataBody?: any, headers?: any) => {
    try {
      const resp = await axios({
        method: "post",
        url: `${URL}${endpoint}`,
        headers: headers,
        data: dataBody,
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

  return { Post, isLoading };
};

export default useAxiosPost;
