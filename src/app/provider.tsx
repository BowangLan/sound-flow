import { SessionProvider } from "next-auth/react";
import { api } from "~/utils/api";
import "~/styles/globals.css";

const MyApp = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
