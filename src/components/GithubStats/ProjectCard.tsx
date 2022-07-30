import { Card, User } from "@geist-ui/react";

interface Props {
  project: any;
}

const ProjectCard = ({ project }: Props) => {
  console.log("project: ", project);

  const {
    name,
    pushedAt,
    updatedAt,

    owner: { avatarUrl, login },
  } = project;

  return (
    <>
      <Card type="dark">
        <div>
          <User src={avatarUrl} name={login}>
            {name}
          </User>
        </div>

        {/* <Card.Footer>
          <Flex justifyContent="space-between" width={"100%"}>
            <Text>
              <Icons.GitHub size={14} />
              
            </Text>
          </Flex>
        </Card.Footer> */}
      </Card>
    </>
  );
};

export default ProjectCard;
