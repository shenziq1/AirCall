const getActivityById = (id) => {
  fetch("https://aircall-job.herokuapp.com/activities/" + id);
}

export default getActivityById
