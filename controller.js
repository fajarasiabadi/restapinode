'use strict';

var respond = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    respond.ok("Running Alhamdulillah", res)
};

// menampilkan data barang
exports.getallbarang = function (req, res) {
    connection.query('SELECT b.kode_barang, b.nama_barang, b.harga, b.stok, jb.jenis_barang, mb.merk_barang FROM barang b LEFT JOIN jenis_barang jb ON jb.id_jenis = b.id_jenis LEFT JOIN merk_barang mb ON mb.id_merk = b.id_merk WHERE mb.merk_barang IS NOT NULL', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            respond.ok(rows, res);
        }
    });
};

// menampilkan data barang berdasarkan id
exports.getallbarangbyid = function (req, res) {
    let id = req.params.id
    connection.query('SELECT b.kode_barang, b.nama_barang, b.harga, b.stok, jb.jenis_barang, mb.merk_barang FROM barang b LEFT JOIN jenis_barang jb ON jb.id_jenis = b.id_jenis LEFT JOIN merk_barang mb ON mb.id_merk = b.id_merk WHERE mb.merk_barang IS NOT NULL AND id_barang = ?', [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            respond.ok(rows, res);
        }
    });
};