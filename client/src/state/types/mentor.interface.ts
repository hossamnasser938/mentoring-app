export interface Mentors {
    mentors: Mentor[];
}

export interface Mentor {
    _id:              string;
    createdAdmin:     string;
    username:         string;
    title:            string;
    description:      string;
    youtubeLink:      string;
    profilePicture:   string;
    cv:               string;
    isCofirmed:       boolean;
    isCreatedByAdmin: boolean;
    __v:              number;
    userId:           string;
}
