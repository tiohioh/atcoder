#include  <stdio.h>
#define false 0;
#define true 1;

int main(void){
  int H,W;
  scanf("%d %d",&H,&W);
  int rem = false;
  int x,y;
  for(int i = 0;i < H;i++){
    char strs[101];
    scanf("%s",strs);
    for(int j = 0;j < W;j++){
      if(strs[j] == 'o')
        if(rem){
          int diffx = j > x ? j - x : x - j;
          int diffy = i - y;
          int diff = diffx + diffy;
          printf("%d\n",diff);
          j = W;
          i = H;
        }else{
          x = j;
          y = i;
          rem = true;
        }
    }
  }
  return 0;
}
