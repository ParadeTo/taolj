package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"order-server/pb"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
)

const PORT = "9002"

var itemClient pb.ItemServiceClient

type Server struct {
	pb.UnimplementedOrderServiceServer
}

func (s *Server) FindOne(context.Context, *pb.OrderById) (*pb.Order, error) {
	fmt.Println("FindOne")
	order := &pb.Order{Id: 1, Price: 99.9, CreateTime: timestamppb.Now()}
	return order, nil
}

func (s *Server) FindOneWithItem(ctx context.Context, request *pb.OrderById) (*pb.OrderWithItemInfo, error) {
	item, _ := itemClient.FindOne(ctx, &pb.ItemById{Id: 1})
	order := &pb.OrderWithItemInfo{Id: 1, Price: 99.9, CreateTime: timestamppb.Now(), Item: (*pb.OrderWithItemInfo_Item)(item)}
	return order, nil
}

func main() {
	itemConn, err := grpc.Dial("localhost:9001", grpc.WithTransportCredentials(insecure.NewCredentials()))
	itemClient = pb.NewItemServiceClient(itemConn)

	server := grpc.NewServer()
	pb.RegisterOrderServiceServer(server, &Server{})

	lis, err := net.Listen("tcp", ":"+PORT)
	if err != nil {
		log.Fatalf("net.Listen err: %v", err)
	}
	fmt.Println(time.Now().Unix())

	server.Serve(lis)
}
