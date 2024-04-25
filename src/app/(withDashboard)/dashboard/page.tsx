import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session?.user && (
        <>
          <Image
            className="mx-auto rounded-full mt-8"
            src={session?.user?.image}
            alt="user image"
            width={100}
            height={80}
          />
          <h1 className="text-4xl text-center mt-10">{session?.user?.name}</h1>
          <h1 className="text-4xl text-center mt-10">
            Email : {session?.user?.email}
          </h1>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
