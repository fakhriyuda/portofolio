import { EmptyWishlist } from "@/public/images";
import "../../styles/learnImage.scss";
import Image from "next/image";

export default function LearnImage() {
  return (
    <div className="section_learn_image">
      <div className="container">
        <h3>Learn Image</h3>
        <Image
          src={EmptyWishlist}
          className="fullwidth"
          alt="image full width"
        ></Image>
        <Image
          src={EmptyWishlist}
          width={500}
          height={500}
          className="has-size"
          alt="Picture of the author"
        />
        <Image
          src={EmptyWishlist}
          width={500}
          height={500}
          className="rounded"
          alt="Picture of the author"
        />
        <div className="bg-full-300-relative">
          <Image
            layout="fill"
            objectFit="cover"
            src={EmptyWishlist}
            alt="Cover example"
            // layout="fill" // Fills the container
          />
        </div>
        <div
          className="bg-full-300-relative"
          style={{ backgroundColor: "red" }}
        >
          <Image
            objectPosition="right"
            layout="fill"
            objectFit="contain"
            src={EmptyWishlist}
            alt="Contain example"
            // layout="fill" // Fills the container
          />
        </div>
        <div
          className="bg-full-300-relative"
          style={{ backgroundColor: "yellow" }}
        >
          <Image
            layout="fill"
            objectFit="contain"
            src={EmptyWishlist}
            alt="Contain example"
            // layout="fill" // Fills the container
          />
        </div>
        <div
          className="bg-full-300-relative"
          style={{ backgroundColor: "yellowgreen" }}
        >
          <Image
            objectPosition="left"
            layout="fill"
            objectFit="contain"
            src={EmptyWishlist}
            alt="Contain example"
            // layout="fill" // Fills the container
          />
        </div>
        <div
          className="bg-full-300-relative"
          style={{ backgroundColor: "blue" }}
        >
            <Image
                width={200}
                height={200}
                objectPosition="right top"
                src={EmptyWishlist}
                alt="Cover example"
                // layout="fill" // Fills the container
            />

        </div>
      </div>
    </div>
  );
}
