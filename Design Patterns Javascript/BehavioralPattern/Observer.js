//pub-sub
// Defines a dependency between objects so that whenever an object changes its state, all its dependents are notified.

// rxjx

const JobPost = (title) => ({
  title: title,
});

class JobSeeker {
  constructor(name) {
    this._name = name;
  }

  notify(jobPost) {
    console.log(
      this._name,
      " has been notified of a new posting :",
      jobPost.title
    );
  }
}

class JobBoard {
  constructor() {
    this._subscribers = [];
  }

  subscribe(jobSeeker) {
    this._subscribers.push(jobSeeker);
  }

  addJob(jobPosting) {
    this._subscribers.forEach((subscriber) => {
      subscriber.notify(jobPosting);
    });
  }
}

const roshan = new JobSeeker("Roshan");

const jobBoard = new JobBoard();
jobBoard.subscribe(roshan);

jobBoard.addJob(JobPost("Software Engineer"));

/*
Output:
Roshan  has been notified of a new posting : Software Engineer
*/

// dom => props => render virtual => real dom
