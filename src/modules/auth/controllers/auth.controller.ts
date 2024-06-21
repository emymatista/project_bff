import { Body, Controller, Get, HttpException, Post, Req, UseGuards } from '@nestjs/common';
import { AuthPayloadDto } from '../dto/auth.dto';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from '../guards/local.guard';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    
    constructor(private authService: AuthService) {}

    @Post('login')
    @UseGuards(LocalGuard)
    login(@Req() req: Request){
        return req.user;
    }

    
    /*
    login(@Body() authPayload: AuthPayloadDto){
        //const user = this.authService.validateUser(authPayload);
        //if(!user) throw new HttpException('Invalid Credentials', 401);
        //return user;
    }
    */


    @Get('status')
    @UseGuards(JwtAuthGuard)
    status(@Req() req: Request){
        console.log('Inside AuthController status method');
        console.log(req.user);
        return req.user;
    }
}
