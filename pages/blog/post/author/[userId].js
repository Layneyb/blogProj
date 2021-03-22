import Head from 'next/head'
import { useRouter } from 'next/router'

const Post = ({ postData }) => {

    const handleClick = (e) => {
        e.preventDefault()
        router.push('/')
    }
    
    const router = useRouter();
    const  { userId }  = router.query
    const  { id }  = router.query
    var x = JSON.stringify(id)
    
    var userIds = JSON.stringify(userId)
    console.log("AUTHOR ID: ", userId)

    var y = JSON.stringify(postData)
    console.log("TEST: ", y)

    return (
        <>
        <main className="profile-page">
        <section className="relative block" style={{ height: "300px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300" style={{ height: "100vh" }}>
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button" onClick={handleClick}
                        style={{ transition: "all .15s ease" }}
                      >
                        Go Back
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        </span>
                            <div className="text-pink-500">{ userId }</div>
                        <span className="text-sm text-gray-500">Author ID</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">

                <div id="title">
              </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4"> <ul>    
                        {postData.map((author) => (
                                <li key={author.userId}>
                                  <div id="postContainer">
                                    <li>POST ID: {author.id}</li> 
                                    <li>TITLE: {author.title}</li>
                                    <li>CONTENTS: {author.body}</li> 
                                  </div>
                                </li> 
                            ))}
                    </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

        </>
        )
    }


  
 
    export async function getStaticPaths() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
      const postData = await res.json()
      var paths = [];
      var userId = JSON.stringify(paths)
      for (var i in postData)
        paths.push(postData[i]);
    
      return {
        paths: [
          { params: { postData, userId } }
        ],
    
        fallback: true
      }
    }
    
    export async function getStaticProps( params ) {
      console.log("PARAM: ", params)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/?=userId=' + params)
      console.log("RESOURCE: ", res)
    
      const postData = await res.json()
      console.log(postData)
    
      if (!postData) {
        return {
          notFound: true,
        }
      }
    
      return {
        props: {
          postData
        }
      }
    }


export default Post;    