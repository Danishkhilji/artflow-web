import { reviewsData } from "../../data";
import ReviewCard from "../ReviewCard";
import classes from "./ReviewSecton.module.css";
const ReviewSection = () => {
  return (
    <section className={classes.wrapper}>
      <h2 className={classes.title}>reviews about ÖYE</h2>
      <div className={classes.reviews}>
        {reviewsData?.map((element) => (
          <ReviewCard key={element?.id} data={element} />
        ))}
      </div>

    </section>
  );
};

export default ReviewSection;
