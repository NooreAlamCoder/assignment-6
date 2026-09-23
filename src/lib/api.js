const getAllWorkouts = async () => {
  const rec = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await rec.json();

  return data;
};

export default getAllWorkouts;