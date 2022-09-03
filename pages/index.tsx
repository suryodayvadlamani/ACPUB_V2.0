import { getSession } from "next-auth/react";
import { useState } from "react";
import clientPromise from "../lib/mongodb";
const IndexPage = ({ user, ud }) => {
  const [questionData, setQuestionData] = useState([]);
  const fetchData = async (type) => {
    const req = await fetch(`/api/type?type=${type}`);
    const newData = await req.json();
    console.log(newData);
    setQuestionData(newData);
  };

  const handleClick = (e, type) => {
    e.preventDefault();
    fetchData(type);
  };

  return (
    <section className="flex flex-col h-[calc(100vh-3.5rem)] overflow-y-auto  bg-slate-400">
      <div className="lg:flex lg:flex-wrap g-0">
        <div className="lg:w-2/5 px-4 md:px-0 my-2 items-center justify-between flex flex-col">
          {ud.map((type, index) => (
            <button key={index} onClick={(e) => handleClick(e, type)}>
              {type}
            </button>
          ))}
        </div>
        <div className="lg:w-2/5 px-4 md:px-0">
          <form>
            {questionData.length > 0 &&
              questionData.map((question, index) => (
                <div className="mb-4" key={index}>
                  <label>{question.question}</label>
                  <input
                    type="text"
                    autoComplete="off"
                    required
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder={question.question}
                  />
                </div>
              ))}
          </form>
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
};

export default IndexPage;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/signin",
      },
      props: {},
    };
  }
  try {
    const client = await clientPromise;
    const db = await client.db("story_wheel");
    const ud = await db.collection("types").find().toArray();
    return {
      props: {
        user: session.user,
        ud: ud.map((x) => x.type),
      },
    };
  } catch (err) {}
}
