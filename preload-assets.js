// Thêm đoạn code này vào đầu file main.js, TRƯỚC tất cả code khác

// Danh sách tất cả assets cần preload
const assetsToPreload = [
  // Hero images
  '/tile1.png',
  '/tile2.png',
  '/tile3.png',
  '/tile4.png',
  
  // Hero videos
  '/hero-video1.mp4',
  '/hero-video2.mp4',
  '/hero-video3.mp4',
  
  // History images
  '/history-1.png',
  '/history-2.png',
  '/history-3.png',
  '/history-4.png',
  
  // Menu preview
  'preview.png',
  
  // Background music
  '/background-music.mp3',
  
  // Bún ốc nguội
  'bun_oc_nguoi/bun-oc-nguoi-1.png',
  'bun_oc_nguoi/bunocnguoi (1).mp4',
  'bun_oc_nguoi/image16.png',
  'bun_oc_nguoi/bunoc2.png',
  'bun_oc_nguoi/image14.png',
  'bun_oc_nguoi/grid-2.png',
  'bun_oc_nguoi/bun-nguoi-2.png',
  'bun_oc_nguoi/image15.png',
  'bun_oc_nguoi/no-background.png',
  
  // Phở cuốn
  'pho_cuon/phocuon1 (1).mp4',
  'pho_cuon/pattern1.png',
  'pho_cuon/image1.png',
  'pho_cuon/phocuon2 (1).mp4',
  'pho_cuon/pattern2.png',
  'pho_cuon/no-bg-1.png',
  'pho_cuon/no-bg-2.png',
  'pho_cuon/no-bg-3.png',
  
  // Tào phớ thạch găng
  'tao_pho_thach_gang/image1.png',
  'tao_pho_thach_gang/image2.png',
  'tao_pho_thach_gang/pattern1.png',
  'tao_pho_thach_gang/image3.png',
  'tao_pho_thach_gang/pattern2.png',
  'tao_pho_thach_gang/image4.png',
  'tao_pho_thach_gang/no-background.png',
  'tao_pho_thach_gang/no-background2.png',
  
  // Bánh tôm hồ Tây
  'banh_tom_ho_tay/image1.png',
  'banh_tom_ho_tay/pattern1.png',
  'banh_tom_ho_tay/pattern2.png',
  'banh_tom_ho_tay/pattern3.png',
  'banh_tom_ho_tay/bánh tôm 6.mp4',
  'banh_tom_ho_tay/image2.png',
  'banh_tom_ho_tay/no-bg-1.png',
  'banh_tom_ho_tay/no-bg-2.png',
  'banh_tom_ho_tay/no-bg-3.png',
  'banh_tom_ho_tay/no-bg-4.png',
  
  // Sứa đỏ
  'sua_do/image 1.png',
  'sua_do/pattern 1.png',
  'sua_do/image 2.png',
  'sua_do/image 3.png',
  'sua_do/no background 1.png',
  'sua_do/no background 2.png',
  'sua_do/no background 3.png',
  
  // Bún chả
  'bun_cha/image1.png',
  'bun_cha/image2.png',
  'bun_cha/pattern1.png',
  'bun_cha/bún chả 5.mp4',
  'bun_cha/image3.png',
  'bun_cha/image4.png',
  'bun_cha/pattern2.png',
  'bun_cha/no-bg-1.png',
  'bun_cha/no-bg-2.png',
  
  // Bún thang
  'bun_thang/bún thang 4.mp4',
  'bun_thang/pattern1.png',
  'bun_thang/pattern2.png',
  'bun_thang/pattern3.png',
  'bun_thang/no-bg-1.png',
  'bun_thang/no-bg-2.png',
  'bun_thang/no-bg-3.png',
  'bun_thang/no-bg-4.png',
  'bun_thang/no-bg-5.png',
  'bun_thang/no-bg-6.png',
  
  // Phở
  'pho_hn/pattern 1.png',
  'pho_hn/pattern 2.png',
  'pho_hn/image 1.png',
  'pho_hn/image 2.png',
  'pho_hn/no background 2.png',
  'pho_hn/no background 3.png',
  'pho_hn/no background 4.png',
  'pho_hn/no background 5.png',
  'pho_hn/no background 6.png',
  
  // Chả cá Lã Vọng
  'cha_ca_la_vong/pattern 1.png',
  'cha_ca_la_vong/pattern 2.png',
  'cha_ca_la_vong/image 1.png',
  'cha_ca_la_vong/image 2.png',
  'cha_ca_la_vong/image 3.png',
  'cha_ca_la_vong/no background 1.png',
  'cha_ca_la_vong/no background 2.png',
  'cha_ca_la_vong/no background 3.png',
  'cha_ca_la_vong/no background 4.png',
  
  // Kem Tràng Tiền
  'kem_trang_tien/pattern 1.png',
  'kem_trang_tien/pattern 2.png',
  'kem_trang_tien/image 1.png',
  'kem_trang_tien/image 2.png',
  'kem_trang_tien/image 3.png',
  'kem_trang_tien/no background 1.png',
  'kem_trang_tien/no background 2.png',
  'kem_trang_tien/no background 3.png',
  'kem_trang_tien/no background 4.png',
  
  // Bún đậu
  'bun_dau_mam_tom/image1.png',
  'bun_dau_mam_tom/pattern1.png',
  'bun_dau_mam_tom/pattern2.png',
  'bun_dau_mam_tom/pattern3.png',
  'bun_dau_mam_tom/image2.png',
  'bun_dau_mam_tom/image3.png',
  'bun_dau_mam_tom/no-bg-1.png',
  'bun_dau_mam_tom/no-bg-2.png',
  
  // Bánh gối
  'banh_goi/pattern1.png',
  'banh_goi/pattern2.png',
  'banh_goi/pattern3.png',
  'banh_goi/image1.png',
  'banh_goi/image2.png',
  'banh_goi/no-bg-1.png',
  'banh_goi/no-bg-2.png',
  
  // Xôi cốm
  'xoi_com/pattern1.png',
  'xoi_com/pattern2.png',
  'xoi_com/image1.png',
  'xoi_com/image2.png',
  'xoi_com/image3.png',
  'xoi_com/image4.png',
  'xoi_com/no-bg-1.png',
  'xoi_com/no-bg-2.png',
  'xoi_com/no-bg-3.png',
  'xoi_com/no-bg-4.png',
  
  // Bánh cuốn Thanh Trì
  'banh_cuon_thanh_tri/pattern 1.png',
  'banh_cuon_thanh_tri/pattern 2.png',
  'banh_cuon_thanh_tri/image 1.png',
  'banh_cuon_thanh_tri/image 2.png',
  'banh_cuon_thanh_tri/image 3.png',
  'banh_cuon_thanh_tri/image 4.png',
  'banh_cuon_thanh_tri/no background 1.png',
  'banh_cuon_thanh_tri/no background 2.png',
  
  // Bún bò Nam Bộ
  'bun_bo_nam_bo/image 1.png',
  'bun_bo_nam_bo/image 2.png',
  'bun_bo_nam_bo/image 3.png',
  'bun_bo_nam_bo/image 4.png',
  'bun_bo_nam_bo/image 5.png',
  'bun_bo_nam_bo/pattern 1.png',
  'bun_bo_nam_bo/pattern 2.png',
  'bun_bo_nam_bo/no background 1.png',
];

// Hàm preload assets
function preloadAssets() {
  const promises = assetsToPreload.map(src => {
    return new Promise((resolve, reject) => {
      // Kiểm tra loại file
      const isVideo = src.endsWith('.mp4');
      const isAudio = src.endsWith('.mp3');
      
      if (isVideo) {
        const video = document.createElement('video');
        video.preload = 'auto';
        video.onloadeddata = () => resolve(src);
        video.onerror = () => {
          console.warn(`Failed to load video: ${src}`);
          resolve(src); // Vẫn resolve để không block loading
        };
        video.src = src;
      } else if (isAudio) {
        const audio = new Audio();
        audio.preload = 'auto';
        audio.oncanplaythrough = () => resolve(src);
        audio.onerror = () => {
          console.warn(`Failed to load audio: ${src}`);
          resolve(src);
        };
        audio.src = src;
      } else {
        // Image
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => {
          console.warn(`Failed to load image: ${src}`);
          resolve(src);
        };
        img.src = src;
      }
    });
  });
  
  return Promise.all(promises);
}

// Gọi hàm preload ngay khi script load
console.log('Starting to preload assets...');
preloadAssets().then(() => {
  console.log('All assets preloaded successfully!');
  document.body.classList.add('assets-loaded');
}).catch(err => {
  console.error('Error preloading assets:', err);
});

// Export để có thể sử dụng trong code khác nếu cần
export { preloadAssets, assetsToPreload };