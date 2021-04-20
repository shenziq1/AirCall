const setActivityById = (id, { isArchived }) => {
  fetch(`https://aircall-job.herokuapp.com/activities/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      is_archived: isArchived,
    }),
  });
}

export default setActivityById
