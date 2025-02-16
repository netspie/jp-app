import React from "react";
import SafeScrollView from "@/components/spy/SafeScrollView";
import Button from "@/components/spy/Button";

const ProjectsPage = () => {
  return (
    <SafeScrollView>
      <Button>Project 1</Button>
      <Button>Project 2</Button>
      <Button>Project 3</Button>
    </SafeScrollView>
  );
};

export default ProjectsPage;
