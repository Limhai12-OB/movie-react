import { Link } from "react-router";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { ButtonIcon } from "../components/AppButton";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";
import { useEffect } from "react";
import { fetchMovies } from "../features/movie/MovieAction";

// export function HomePagessss() {
//   const posts = [
//     {
//       title: "What is SaaS? Software as a Service Explained",
//       desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
//       img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//       authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
//       authorName: "Sidi dev",
//       date: "Jan 4 2022",
//       href: "javascript:void(0)",
//     },
//     {
//       title: "A Quick Guide to WordPress Hosting",
//       desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
//       img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//       authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
//       authorName: "Micheal",
//       date: "Jan 4 2022",
//       href: "javascript:void(0)",
//     },
//     {
//       title: "7 Promising VS Code Extensions Introduced in 2022",
//       desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
//       img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//       authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
//       authorName: "Luis",
//       date: "Jan 4 2022",
//       href: "javascript:void(0)",
//     },
//     {
//       title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
//       desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
//       img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//       authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
//       authorName: "Lourin",
//       date: "Jan 4 2022",
//       href: "javascript:void(0)",
//     },
//     {
//       title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
//       desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
//       img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//       authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
//       authorName: "Lourin",
//       date: "Jan 4 2022",
//       href: "javascript:void(0)",
//     },
//     {
//       title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
//       desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
//       img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//       authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
//       authorName: "Lourin",
//       date: "Jan 4 2022",
//       href: "javascript:void(0)",
//     },
//   ];

//   return (
//     <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
//       <div className="text-center">
//         <h1 className="text-3xl text-gray-800 font-semibold">Our Movies</h1>
//         <p className="mt-3 text-gray-500">
//           Blogs that are loved by the community. Updated every hour.
//         </p>
//       </div>
//       <div className="mt-10  grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
//         {posts.map((items, key) => (
//           <article
//             className="max-w-md mx-auto  shadow-lg border rounded-md duration-300 hover:shadow-sm"
//             key={key}
//           >
//             <Link to="moviedetail" href={items.href}>
//               <img
//                 src={items.img}
//                 loading="lazy"
//                 alt={items.title}
//                 className="w-full h-48 rounded-t-md"
//               />
//               <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
//                 <div className="flex-none w-10 h-10 rounded-full">
//                   <img
//                     src={items.authorLogo}
//                     className="w-full h-full rounded-full"
//                     alt={items.authorName}
//                   />
//                 </div>
//                 <div className="ml-3">
//                   <span className="block text-gray-900">
//                     {items.authorName}
//                   </span>
//                   <span className="block text-gray-400 text-sm">
//                     {items.date}
//                   </span>
//                 </div>
//               </div>
//               <div className="pt-3 ml-4 mr-2 mb-3">
//                 <h3 className="text-xl text-gray-900">{items.title}</h3>
//                 <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
//               </div>
//             </Link>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

export default function Home() {
  const dispatch = useDispatch();

  const { data, status } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  function onIncreasement() {
    console.log("Increasement");
    dispatch(increment());
  }

  const onDecreasement = () => {
    console.log("Decreasement");
    dispatch(decrement());
  };

  return (
    <main>
      <div className="px-4 py-2 grid grid-cols-2 gap-2">
        <ButtonIcon onClick={onIncreasement} icon={<FaPlus />} />
        <ButtonIcon onClick={onDecreasement} icon={<FaMinus />} />
      </div>
      <hr />
      <Link
        className="grid gap-x-4 gap-y-10 m-auto max-w-screen-xl  sm:grid-cols-2 lg:grid-cols-3 p-5"
        to="/moviedetail"
      >
        {/* <Link className="grid gap-x-4 gap-y-10 m-auto max-w-screen-xl  sm:grid-cols-2 lg:grid-cols-3 p-5"> */}
        {data.results &&
          data.results.map((movie) => (
            <div className="w-full mx-auto group sm:max-w-sm">
              <a href="#">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  loading="lazy"
                  alt={movie.original_title}
                  className="w-full rounded-lg"
                />
                <div className="mt-3 space-y-2">
                  <span className="block text-indigo-600 text-sm">
                    {movie.release_date}
                  </span>
                  <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                    {movie.original_title}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                    {movie.overview}
                  </p>
                </div>
              </a>
            </div>
          ))}
        {/* </Link> */}
      </Link>
    </main>
  );
}
