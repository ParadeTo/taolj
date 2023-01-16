package main

import (
	"context"
	"log"
	"net"
	"order-server/pb"

	"google.golang.org/grpc"
)

const PORT = "9001"

type Server struct {
	pb.UnimplementedOrderServiceServer
}

// SayHello implements helloworld.GreeterServer
func (s *Server) FindOne(context.Context, *pb.OrderById) (*pb.Order, error) {
	order := &pb.Order{Id: 1, Name: "I am Order"}
	return order, nil
}

func main() {
	server := grpc.NewServer() //创建 gRPC Server对象

	//将 SearchService（其包含需要被调用的服务端接口）注册到gRPC Server 的内部注册中心
	//这样可以在接受到请求时，通过内部的服务发现，发现该服务端接口并转接进行逻辑处理
	// pb.RegisterSearchServiceServer(server, &SearchService{})
	pb.RegisterOrderServiceServer(server, &Server{})
	lis, err := net.Listen("tcp", ":"+PORT) //创建 Listen，监听 TCP 端口
	if err != nil {
		log.Fatalf("net.Listen err: %v", err)
	}

	//gRPC Server开始 lis.Accept,直到 Stop 或 GracefulStop
	server.Serve(lis)
}
