export interface ProjectIdeas {
    data: ProjectIdea[];
}

export interface ProjectIdea {
    _id:           string;
    name:          string;
    description:   string;
    youtubeLink:   string;
    createdMentor: string;
    __v:           number;
}
