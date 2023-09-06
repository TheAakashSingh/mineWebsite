// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  // {
  //   id: 0,
  //   name: 'Sikandar Hayat',
  //   image: "images/sikandar.jpeg",
  //   designation: 'Data Scientist | Machine Learning Engineer | Python Developer',
  //   view: "I had the privilege of working alongside Osama on multiple university projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team at JMM Technologies, where Osama's professionalism and attention to detail shone brightly. I wholeheartedly endorse Osama for any opportunity that calls for a highly skilled and dedicated individual.",
  //   linkednURL: "https://www.linkedin.com/in/sikandar-hayat-381407179/"
  // },

]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
