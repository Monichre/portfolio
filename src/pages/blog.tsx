import { DashboardWrap } from "../components/dashboard/Dashboard.style";
import React from "react";
import { Text } from "@geist-ui/react";

interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  return (
    <DashboardWrap>
      <Text>Soon Come Friend. Soon come</Text>
    </DashboardWrap>
  );
};

export default Blog;
