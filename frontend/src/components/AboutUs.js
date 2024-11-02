import React from 'react';
import { Media } from 'reactstrap';


function AboutUs() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mt-4">
              <h1 className="title">
                <img
                  src="\assets\img\aboutusicon.png"
                  alt="icon"
                  width="04%"
                />
                <sp /> About Us
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mt-4">
              <Media>
                <img
                  className="mr-4"
                  src="\assets\img\about-us-page-img.jpg"
                  alt="Picture of Capitol Building"
                  width="40%"
                />
                <Media body>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non aliquam enim, vitae tristique dui. Nam nec nulla vitae
                    nisl vulputate varius id et ante. Etiam non nunc sem. Ut
                    pulvinar risus ut magna congue vulputate. Vestibulum at
                    cursus tellus, at venenatis lacus. Maecenas vel dapibus
                    velit. Pellentesque gravida risus non fringilla posuere.
                    Duis dictum sem et imperdiet tincidunt. Praesent mattis
                    mattis enim vitae commodo. Nulla facilisi. Fusce
                    ullamcorper, nisi a feugiat vestibulum, diam magna fermentum
                    massa, vel sollicitudin magna orci ut lorem. Donec quis
                    eleifend metus. Suspendisse ullamcorper sollicitudin orci
                    quis gravida. Sed tempus posuere eros, vel consequat tellus
                    lobortis tincidunt.
                  </p>
                </Media>
              </Media>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mt-4">
              <h2 className="title">Meet The Team!</h2>
            </div>
            <div className="col">
              <Media className="mt-4">
                <Media body>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non aliquam enim, vitae tristique dui. Nam nec nulla vitae
                    nisl vulputate varius id et ante. Etiam non nunc sem. Ut
                    pulvinar risus ut magna congue vulputate. Vestibulum at
                    cursus tellus, at venenatis lacus. Maecenas vel dapibus
                    velit. Pellentesque gravida risus non fringilla posuere.
                    Duis dictum sem et imperdiet tincidunt. Praesent mattis
                    mattis enim vitae commodo. Nulla facilisi. Fusce
                    ullamcorper, nisi a feugiat vestibulum, diam magna fermentum
                    massa, vel sollicitudin magna orci ut lorem. Donec quis
                    eleifend metus. Suspendisse ullamcorper sollicitudin orci
                    quis gravida. Sed tempus posuere eros, vel consequat tellus
                    lobortis tincidunt. Maecenas vel dapibus velit. Pellentesque
                    gravida risus non fringilla posuere. Duis dictum sem et
                    imperdiet tincidunt.
                  </p>
                </Media>
                <img
                  className="ml-4"
                  src="\assets\img\meet-the-team-img.jpg"
                  alt="The Team"
                  width="40%"
                />
              </Media>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 mt-4 mb-5">
              <Media>
                <img
                  src="\assets\img\hands.jpg"
                  width="40%"
                  alt="Team work image"
                />
                <Media body className="ml-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non aliquam enim, vitae tristique dui. Nam nec nulla vitae
                    nisl vulputate varius id et ante. Etiam non nunc sem. Ut
                    pulvinar risus ut magna congue vulputate. Vestibulum at
                    cursus tellus, at venenatis lacus. Maecenas vel dapibus
                    velit. Pellentesque gravida risus non fringilla posuere.
                    Duis dictum sem et imperdiet tincidunt. Praesent mattis
                    mattis enim vitae commodo. Nulla facilisi. Fusce
                    ullamcorper, nisi a feugiat vestibulum, diam magna fermentum
                    massa, vel sollicitudin magna orci ut lorem. Donec quis
                    eleifend metus. Suspendisse ullamcorper sollicitudin orci
                    quis gravida. Sed tempus posuere eros, vel consequat tellus
                    lobortis tincidunt. Maecenas vel dapibus velit.
                  </p>
                </Media>
              </Media>
            </div>
          </div>
        </div>
      </>
    );
  
}

export default AboutUs;