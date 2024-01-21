// import type { APIRoute } from "astro";
// import {
//   collection,
//   getDocs,
//   getDoc,
//   setDoc,
//   doc,
//   query,
//   where,
// } from "firebase/firestore";

// import { db } from "../../firebase";

// export const POST: APIRoute = async ({ request }) => {
//   const { slug, url } = await request.json();

//   try {
//     await createView(slug, url);
//     const q = query(collection(db, "views"), where("article", "==", url));
//     const snapshot = await getDocs(q);
//     const count = snapshot.size;
//     return new Response(
//       JSON.stringify({
//         message: "Success",
//         countUpdated: true,
//         count,
//       }),
//       { status: 200 }
//     );
//   } catch (error) {
//     return new Response(
//       JSON.stringify({
//         message: (error instanceof Error && error?.message) ?? "Failure",
//         countUpdated: false,
//       }),
//       { status: 500 }
//     );
//   }
// };

// async function createView(slug: string, url: string) {
//   try {
//     const response = await fetch("https://api.ipify.org?format=json");
//     const data = await response.json();
//     const user_ip: string = data.ip || "";
//     const docId = `${user_ip}-${slug}`; // Combine user IP and article URL to form a unique ID

//     const docRef = doc(db, "views", docId);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       console.log("This user has been viewed this post");
//     } else {
//       if (typeof user_ip === "string") {
//         await setDoc(docRef, {
//           user_ip,
//           article: url,
//         });
//       }
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }
