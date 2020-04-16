<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$eta_date = mysqli_real_escape_string($mysqli,trim($request->eta_date));
$in_agent = mysqli_real_escape_string($mysqli, trim($request->in_agent));
$cont_no = mysqli_real_escape_string($mysqli, trim($request->cont_no));
$im_name = mysqli_real_escape_string($mysqli,trim($request->im_name));
$sh_name = mysqli_real_escape_string($mysqli, trim($request->sh_name));
$c_lcl_fcl = mysqli_real_escape_string($mysqli, trim($request->c_lcl_fcl));
$con_type = mysqli_real_escape_string($mysqli,trim($request->con_type));
$con_20 = mysqli_real_escape_string($mysqli, trim($request->con_20));
$con_40 = mysqli_real_escape_string($mysqli, trim($request->con_40));
$cargo_name =mysqli_real_escape_string($mysqli, trim($request->cargo_name));
$liner_name = mysqli_real_escape_string($mysqli, trim($request->liner_name));
$bl_no = mysqli_real_escape_string($mysqli, trim($request->bl_no));
$bl_date = mysqli_real_escape_string($mysqli,trim($request->bl_date));
$hbl_no = mysqli_real_escape_string($mysqli, trim($request->hbl_no));
$fr_days = mysqli_real_escape_string($mysqli, trim($request->fr_days));
$load_port = mysqli_real_escape_string($mysqli,trim($request->load_port));
$vessel_name = mysqli_real_escape_string($mysqli, trim($request->vessel_name));
$doc_type = mysqli_real_escape_string($mysqli, trim($request->doc_type));
$voy_no = mysqli_real_escape_string($mysqli, trim($request->voy_no));
$cfs = mysqli_real_escape_string($mysqli, trim($request->cfs));

$sql = "INSERT INTO kl_arrival(etadate,intending_agent,contract_number,importer_name,
shipper_name,lcl_fcl,container_type,container_20in,container_40in,cargo_name,liner_name,bl_number,
bl_date,hbl_number,freedays,load_port,vessel_name,doc_type,voyage_number,cfs) VALUES ('$eta_date','$in_agent','$cont_no',
'$im_name','$sh_name','$c_lcl_fcl','$con_type','$con_20','$con_40','$cargo_name','$liner_name','$bl_no','$bl_date',
'$hbl_no','$fr_days','$load_port','$vessel_name','$doc_type','$voy_no','$cfs')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'eta_date' => $eta_date,
'in_agent' => $in_agent,
'cont_no' => $cont_no,
'im_name' => $im_name,
'sh_name' => $sh_name,
'c_lcl_fcl' => $c_lcl_fcl,
'con_type' => $con_type,
'con_20' => $con_20,
'con_40' => $con_40,
'cargo_name' => $cargo_name,
'liner_name' => $liner_name,
'bl_no' => $bl_no,
'bl_date' => $bl_date,
'hbl_no' => $hbl_no,
'fr_days' => $fr_days,
'load_port' => $load_port,
'vessel_name' => $vessel_name,
'doc_type' => $doc_type,
'voy_no' => $voy_no,
'cfs' => $cfs,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>