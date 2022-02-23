import { Response } from "express";
import Voucher from "../../models/voucher";

const FetchCurrentId = async (_: any, res: Response) => {
  let currId;
  try {
    currId = await Voucher.countDocuments({}); // getting timeout error here!!!
  } catch (err) {
    console.log(err);
  }
  console.log(currId);
  return res.json({
    currId: currId,
  });
};

export default FetchCurrentId;
