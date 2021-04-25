// {isArchived} is a javascript object. 
export const editActivity = (id, { isArchived }) =>
  fetch(`https://aircall-job.herokuapp.com/activities/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      is_archived: isArchived,
    }),
  });

// When using () => (...) it is called implicit return,
// it is equivalent to () => {return ...}, which is called explicit return.

//template literals `/${id}`
export const getActivityById = (id) => {
  return fetch(`https://aircall-job.herokuapp.com/activities/${id}`);
}
