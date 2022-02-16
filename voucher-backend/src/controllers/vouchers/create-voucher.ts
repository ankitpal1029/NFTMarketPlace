import { Request, Response } from "express";
import Voucher from "../../models/voucher";

interface IvoucherAPIData {
  voucher: {
    uri: String;
    minPrice: {
      type: String;
      hex: String;
    };
    tokenId: Number;
    collection: String;
  };
  meta: String;
  signature: String;
}
const CreateVoucher = async (req: Request, res: Response) => {
  let recievedData: IvoucherAPIData[] = req.body.data;

  console.log(recievedData);
  let insertData = recievedData.map((x: IvoucherAPIData) => ({
    voucher: {
      uri: x.voucher.uri,
      minPrice: x.voucher.minPrice,
      tokenId: x.voucher.tokenId,
      collection: x.voucher.collection,
    },
    meta: x.meta,
    signature: x.signature,
    redeemed: false,
  }));

  try {
    const response = await Voucher.insertMany(insertData);
    console.log(response);
    return res.json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      error: "Voucher with that tokenId has already been generated",
    });
  }
};

export default CreateVoucher;
