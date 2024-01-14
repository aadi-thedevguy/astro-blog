// import type { APIRoute } from "astro";
// import { getDocs, addDoc, query, where, collection } from "firebase/firestore";
// import { db } from "../../firebase";

// export const POST: APIRoute = async ({ request }) => {
//   const { blogUrl } = await request.json();
//   const response = await fetch("https://api.ipify.org?format=json");
//   const data = await response.json();
//   console.log("Your current IP address : " + data.ip);
//   const user_ip = data.ip;

//   const q = query(collection(db, "views"), where("user_ip", "==", user_ip));
//   const snapshot = await getDocs(q);

//   if (snapshot.size > 0) {
//     return new Response(
//       JSON.stringify({
//         message: "Success",
//         countUpdated: false,
//       })
//     );
//   }

//   const result = await addDoc(collection(db, "views"), {
//     user_ip,
//     blogUrl,
//   });

//   console.log(result.id);

//   return new Response(
//     JSON.stringify({
//       message: "Success",
//       countUpdated: true,
//     })
//   );
// };
