#include <stdio.h>

int main(void){
  int cou;//>=100
  scanf("%d",&cou);
  int slots[10][10];
  for(int i = 0;i < 10;i++)
    for(int j = 0;j < 10;j++)
      slots[i][j] = 0;
  for(int i = 0;i < cou;i++){
    char str[11];
    char ss[10];
    scanf("%s",str);
    for(int j = 0;j < 10;j++){
      int s = str[j] - '0';
      slots[s][j] += 1;
    }
  }
  //int n = 8;
  //printf("%d : %d %d %d %d %d %d %d %d %d %d\n",n,slots[n][0],slots[n][1],slots[n][2],slots[n][3],slots[n][4],slots[n][5],slots[n][6],slots[n][7],slots[n][8],slots[n][9]);
  int min = 10000;
  for(int i = 0;i < 10;i++){//基準数
    int max_elem = 0;
    int max_size = 0;
    for(int j = 0;j < 10;j++){
      if(slots[i][j] >= max_size){
        max_size = slots[i][j];
      	max_elem = j;
      }
    }
    int t = (max_size - 1) * 10 + max_elem;
    min = t < min ? t : min;
  }
  printf("%d",min);
}
