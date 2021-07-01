import React, { useState, useRef } from "react";
import { Card, CardActions, Collapse, makeStyles } from "@material-ui/core";
import Title from "./Title";
import Image from "./Image";
import FavoriteButton from "./Buttons/FavoriteButton";
import ShareButton from "./Buttons/ShareButton";
import ExpandButton from "./Buttons/ExpandButton";
import RecipeCollapse from "./Collapse/RecipeCollapse";
import CloseButton from "./Buttons/CloseButton";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
  },
}));

function Recipe({ recipe }) {
  const classes = useStyles();
  const scrollRef = useRef();
  const [expanded, setExpanded] = useState(false);

  // Expand handler for recipe details
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div ref={scrollRef}></div>
      <Card className={classes.root} raised={expanded}>
        <Title title={recipe.title} />
        <CloseButton id={recipe.id} />
        <Image image={recipe.image} />
        <CardActions disableSpacing>
          <FavoriteButton recipe={recipe} />
          <ShareButton sourceUrl={recipe.sourceUrl} />
          <ExpandButton expanded={expanded} handleExpand={handleExpand} />
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <RecipeCollapse
            recipe={recipe}
            closeCollapse={handleExpand}
            scrollRef={scrollRef}
          />
        </Collapse>
      </Card>
    </>
  );
}

export default Recipe;
