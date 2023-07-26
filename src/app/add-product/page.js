import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Add Product - Anizon",
};

async function addProduct(formData) {
  "use server";

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const imageUrl2 = formData.get("imageUrl2")?.toString();
  const imageUrl3 = formData.get("imageUrl3")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !imageUrl2 || !imageUrl3 || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl,imageUrl2, imageUrl3, price },
  });

  redirect("/add-product");
}

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  const user = session?.user;
  let email = user?.email;
  if (email === "renudilip19@gmail.com") {
    return (
      <div>
        <h1 className="mb-3 text-lg font-bold">Add Product</h1>
        <form action={addProduct}>
          <input
            required
            name="name"
            placeholder="Name"
            className="input-bordered input mb-3 w-full"
          />
          <textarea
            required
            name="description"
            placeholder="Description"
            className="textarea-bordered textarea mb-3 w-full"
          />
          <input
            required
            name="imageUrl"
            placeholder="Image URL port"
            type="url"
            className="input-bordered input mb-3 w-full"
          />
          <input
            required
            name="imageUrl2"
            placeholder="Image URL2 land"
            type="url"
            className="input-bordered input mb-3 w-full"
          />
          <input
            required
            name="imageUrl3"
            placeholder="Image URL3 port"
            type="url"
            className="input-bordered input mb-3 w-full"
          />
          <input
            required
            name="price"
            placeholder="Price"
            type="number"
            className="input-bordered input mb-3 w-full"
          />

          <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
        </form>
      </div>
    );
  } else {
    return <div> You are not the owner</div>;
  }
}
