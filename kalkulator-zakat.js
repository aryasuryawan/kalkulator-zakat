function sum_harta(){harta=0;$('.harta').each(function(){harta+=parseInt(this.value);});return harta;}
function sum_hutang(){hutang=0;$('.hutang').each(function(){hutang+=parseInt(this.value);});return hutang;}
function nisab_zakat(jenis){if(jenis=='beras'){harga_beras=$('[name="harga_beras"').val();besar_nisab=parseInt(harga_beras*522);}else{harga_beras=$('[name="harga_emas"').val();besar_nisab=parseInt(harga_beras*85);}
$('.besar_nisab').val(besar_nisab);return besar_nisab;}
function calculate_zakat(jenis){$harta=sum_harta();$hutang=sum_hutang();$penghasilan=$harta-$hutang;$nisab_zakat=nisab_zakat(jenis);$('.jumlah_harta').val($harta);$('.penghasilan').val($penghasilan);if($penghasilan>$nisab_zakat){status_zakat='Ya';besar_zakat=$penghasilan*0.025;}else{status_zakat='Tidak';besar_zakat=0;}
$('.status_zakat').val(status_zakat);$('.besar_zakat').val(besar_zakat);}
$(document).ready(function(){define_harga_beras=6500;define_harga_emas=530000;define_page=$('form').attr('data-uri');if(define_page=='zakat_penghasilan'){$('[name="harga_beras"').val(define_harga_beras);jenis='beras';}else{$('[name="harga_emas"').val(define_harga_emas);jenis='emas';}
nisab_zakat(jenis);$('form input:text').keyup(function(){calculate_zakat(jenis);});});
