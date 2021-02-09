import Head from "next/head";

const About: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>Ninja LIst | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          recusandae soluta nemo voluptatem molestias placeat voluptate quas
          expedita quaerat provident obcaecati, praesentium, veritatis omnis
          commodi? Odit soluta ea possimus fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero incidunt
          necessitatibus eos vitae minus alias ea laborum, perspiciatis nisi,
          praesentium doloremque repudiandae? Harum dicta soluta blanditiis
          error! Fugiat, ut quisquam.
        </p>
      </div>
    </>
  );
};

export default About;
