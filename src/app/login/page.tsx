import LoginView from "@/components/views/login-page";
import { Suspense } from "react";
// api fetch

export const login = async (body: { username: string; password: string }) => {
  console.log(body);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(res);
};
export const fetchUser = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, {
    method: "GET",
  });
  const data = await res.json();
  console.log(data);
};
export default function Page() {
  // get data from api
  // api update
  return (
    <div className="bg-black md:p-8 p-4">
      {/* data fetching */}
      <Suspense fallback={<>Loading...</>}>
        <LoginView />
      </Suspense>
    </div>
  );
}
