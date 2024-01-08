export class Article {           //this is a plain class(in this case model), not component. We should put most of logic to the model
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number){    //votes? - is optional and default is zero.
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp(): void{
        this.votes +=1;
    }

    voteDown(): void{
        this.votes -=1;
    }

    domain(): string | null {       //utility function that extracts the domain from a url
        try{
            const domainAndPath: string = this.link.split('//')[1];

            return domainAndPath.split('/')[0];
        }catch(err) {
            return null;
        }
    }
}