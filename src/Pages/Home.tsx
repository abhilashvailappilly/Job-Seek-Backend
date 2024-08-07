import { useState } from "react";
import AnimatedCard from "../Components/Card/Card"
import Test2 from "../Components/FramerMotio/Test2"
import Modal from "../Components/FramerMotio/Test";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const hanldeViewDetails = () => {console.log("view details worked")
    setShowModal(true);
  };
  return (
    <div className="bg-red-300 flex items-center justify-center min-h-screen max-w-screen min-w-screen ">
      <div className="grid mt-10 items-center grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4 lg-grid-cols-5 xl-grid-cols-5 w-full">
        
     <Test2>
     <AnimatedCard
        image="https://media.licdn.com/dms/image/v2/D4D0BAQF5J93ZxLEbbA/company-logo_200_200/company-logo_200_200/0/1667811876161/grape_up_logo?e=1730937600&v=beta&t=MEdoqS4qXJZdcdRNqV1T0pskEElymIRFMdxOHZXEW1o"
        title="Sales Director - Application Modernization for BFSI"
        description="https://www.linkedin.com/jobs/view/3972090725"
        viewDetails={hanldeViewDetails}
      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
      <Test2>
     <AnimatedCard
        image="https://via.placeholder.com/300"
        title="Card Title 1"
        description="This is a description for card 1."
        viewDetails={hanldeViewDetails}

      />
      </Test2> 
        {/* <Card title="Card 1" content="This is the content of card 1." />
        <Card title="Card 2" content="This is the content of card 2." />
        <Card title="Card 3" content="This is the content of card 3." />
        <Card title="Card 4" content="This is the content of card 4." />
        <Card title="Card 5" content="This is the content of card 5." />
        <Card title="Card 6" content="This is the content of card 6." /> */}
      </div>
      {showModal && (
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <h1>Modal Content</h1>
          <p>This is the content of the modal.</p>
        </Modal>
      )}
    </div>
  )
}

export default Home
